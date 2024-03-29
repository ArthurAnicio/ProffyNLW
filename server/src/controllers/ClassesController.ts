import { Request, Response } from "express";
import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";
interface ScheduleItem{
    week_day: number,
    from:string,
    to:string
}

export default class ClassesControler{
    
    async index(request: Request, response: Response) {
        
        const filters = request.query;

        const week_day = filters.week_day as string;
        const time = filters.time as string;
        const subject = filters.subject as string;
        if (!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json("coloca os trem")
        }else{
            
            const timeInMinutes = convertHourToMinutes(time);
            
            const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from`<= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])

            return response.json(classes)
        
        }
    }
    
    
    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        }
        = request.body
        
        const trx = await db.transaction();
    
        try{
            const insertedUsersId = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
        
            const user_id = insertedUsersId[0];
        
            const insertedClassesId = await trx('classes').insert({
                subject,
                cost,
                user_id
            })
        
            const class_id = insertedClassesId[0]
        
            const classSchedule = schedule.map((secheduleItem: ScheduleItem) => {
                
                return{
                    class_id,
                    week_day: secheduleItem.week_day,
                    from: convertHourToMinutes(secheduleItem.from),
                    to: convertHourToMinutes(secheduleItem.to)
                }
            })
        
            await trx('class_schedule').insert(classSchedule)
        
        
            await trx.commit();
            
        
            return response.status(201).json("mandou bem :D");
        }catch (error) {
            await trx.rollback();
            return response.status(400).json("mandou mal :/");
        }
}
}