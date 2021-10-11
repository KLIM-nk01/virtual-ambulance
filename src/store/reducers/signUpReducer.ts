

interface ISignUpInitialState {
    userRole: 'user' | 'doctor',
    userData?: {
        name: string
        lastName: string
        birthday: string
        email: string
        phone: string
        adress: string
        password: string
    },
    doctorData?: {
        name: string
        lastName: string
        email: string
        phone: string
        expiriens: string
        direction: string
        workPlace: string
        password: string
    }
}

const SignUpInitialState: ISignUpInitialState = {
    userRole: 'user',


}

export const signUpReduser = (state = SignUpInitialState, action) => {

}