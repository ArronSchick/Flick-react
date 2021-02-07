import { build, fake } from '@jackfranklin/test-data-bot'

const userBuilder = build('User', {
    fields: {
        username: fake((f) => f.name.firstName()),
        email_signup: fake((f) => f.internet.email()),
        password_signup: fake((f) => f.internet.password())
    }
})

export {
    userBuilder,
}