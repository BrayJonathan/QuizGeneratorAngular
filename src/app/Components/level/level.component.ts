import { Component, OnInit, Input } from '@angular/core';
import { LevelService } from 'src/app/Services/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  @Input() Level;
  constructor(private LevelService: LevelService) { }

  ngOnInit() {
  }

  onUpdateLevel(){
    console.log("onUpdateLevel");
    
    this.LevelService.updateLevel(this.Level).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
