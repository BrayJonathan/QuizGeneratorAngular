import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LevelService {
/* #region Variables */
levels:Array<any>;
level;
/* #endregion */

/* #region Constructor */
  constructor(private httpClient: HttpClient) { }
/* #endregion */

/* #region Methods */
getAllLevels(){
  return this.httpClient.get(environment.baseUrl+'/level/');
}

// updateLevel(level){
//   return this.httpClient.put(environment.baseUrl+'/level/'+ level.LevelID, level);
// }
updateLevel(level){
  return this.httpClient.put('/api/level/'+level.LevelID, level);
}
/* #endregion */
}
