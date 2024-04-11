import * as TodoActionCreators from './todo'
import * as UserActionCreators from './ucer'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}