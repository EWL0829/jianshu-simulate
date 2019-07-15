import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as signInReducer } from '../pages/signIn/store';
import { reducer as sliderReducer } from '../common/slider/store';

const reducer = combineReducers({
    header: headerReducer,
    home:   homeReducer,
    detail: detailReducer,
    signIn: signInReducer,
    slider: sliderReducer,
});

export default reducer;