//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../commend/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailsReducer } from '../pages/details/store';
import { reducer as loginReducer } from '../pages/login/store';


const reducer = combineReducers({    //将所有小的记事本，整合成一个记事本
    header: headerReducer,
    home: homeReducer,
    detail: detailsReducer,
    login: loginReducer
})
export default reducer;