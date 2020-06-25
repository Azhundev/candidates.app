import { combineReducers } from 'redux';

import { admin } from './admin.reducer';
import { alert } from './alert.reducer';
import { user } from './user.reducer';
import { authentication } from './authentication.reducer';

const rootReducer = combineReducers({
  admin,
  alert,
  authentication,  
  user
});

export default rootReducer;