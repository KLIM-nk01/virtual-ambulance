export interface IPatientData {
  userRole: string;
  name: string;
  lastName: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}
export interface IDoctorData {
  userRole: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  direction: string;
  workPlace: string;
  password: string;
}

export interface ISignUpInitialState {
  readonly requestLoading: boolean;
  readonly doctorsData?: IDoctorData | null;
  readonly patientData?: IPatientData | null;
  readonly requestError: string;
}

export enum SignUpActionsType {
  REGISTRATION_REQUEST = 'REGISTRATION_REQUEST',
  REGISTRATION_PATIENT_SUCCESS = 'REGISTRATION_PATIENT_SUCCESS',
  REGISTRATION_DOCTOR_SUCCESS = 'REGISTRATION_DOCTOR_SUCCESS',
  REGISTRATION_ERROR = 'REGISTRATION_ERROR'
}
interface RegistrationRequest {
  type: SignUpActionsType.REGISTRATION_REQUEST;
}

interface RegistrationPatientSuccess {
  type: SignUpActionsType.REGISTRATION_PATIENT_SUCCESS;
  patientData: IPatientData;
}

interface RegistrationDoctorSuccess {
  type: SignUpActionsType.REGISTRATION_DOCTOR_SUCCESS;
  doctorData: IDoctorData;
}

interface RegistrationError {
  type: SignUpActionsType.REGISTRATION_ERROR;
  errorMessage: string;
}

export type ActionType =
  | RegistrationRequest
  | RegistrationPatientSuccess
  | RegistrationDoctorSuccess
  | RegistrationError;
