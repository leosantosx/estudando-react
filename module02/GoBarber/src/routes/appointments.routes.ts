import { Router } from 'express'
import { startOfHour, parseISO } from 'date-fns'
import AppointmentsRepository from '../repositories/appointmentsRepository'


const appointmentsRouter = Router()

const appointmentsRepository = new AppointmentsRepository()


appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all()

    return response.json(appointments)
})

appointmentsRouter.post('/', (request, response) => {
    const {provider, date} = request.body
    const pasedDate = startOfHour(parseISO(date))

    const findAppointmentInSameDate = appointmentsRepository.findByDate(pasedDate)

    if(findAppointmentInSameDate){
        return response
            .status(400)
            .json({ message: 'This appointment is alredy booked' })
    }

    const appointment = appointmentsRepository.create(provider, pasedDate)

    return response.json(appointment)
})

export default appointmentsRouter