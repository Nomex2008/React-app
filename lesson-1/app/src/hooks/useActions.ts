import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from '../store/action-creators/ucer'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}