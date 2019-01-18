import { Component, OnInit, Input } from '@angular/core';
import { LevelService } from 'src/app/Services/level.service';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss']
})
export class LevelListComponent implements OnInit {
  /* #region Variable */
  levels:Array<any>;

  /* #endregion */

  /* #region Constructor */
  constructor(private levelService : LevelService) { }
  /* #endregion */

  /* #region Methods */
  ngOnInit() {
    this.levelService.getAllLevels().subscribe(
      (result: Array<any>) => {
        this.levels = result;
      }
    );
  }
  /* #endregion */

}
