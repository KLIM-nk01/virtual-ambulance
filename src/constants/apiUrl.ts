export const API_URL = {
  AUTHORIZATION: `${process.env.HOST}/authorization/user`,
  REGISTRATION: `${process.env.HOST}/registration/user`,
  MEDCENTERS: `${process.env.HOST}/medCenters`,
  DOCTORS: `${process.env.HOST}/doctors`,
  USER_AUTHORIZATION: `${process.env.HOST}/userAuth`,
  PROFILE_PATIENT: `${process.env.HOST}/profile/patient`,
  PROFILE_DOCTOR: `${process.env.HOST}/profile/doctor`,
  PROFILE_DOCTOR_ADD_DATE: `${process.env.HOST}/profile/addDate`,
  PROFILE_DOCTOR_DELETE_DATE: `${process.env.HOST}/profile/deleteDate`,
  PROFILE_PATIENT_ADD_APPOINTMENT: `${process.env.HOST}/profile/addAppointment`,
  PROFILE_PATIENT_DELETE_APPOINTMENT: `${process.env.HOST}/profile/deleteAppointment`,
};
