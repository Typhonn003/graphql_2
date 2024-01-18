import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";

const appointments: Appointment[] = [];

@Resolver()
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointment() {
    return appointments;
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointmen = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    appointments.push(appointmen);

    return appointmen;
  }
}
