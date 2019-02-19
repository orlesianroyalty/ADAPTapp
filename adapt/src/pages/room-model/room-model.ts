import { ViewChild, Component } from '@angular/core';
import { SceneGraph } from '../../components/scenegraph/scenegraph'

@Component({
  selector: 'page-room-model',
  templateUrl: 'room-model.html'
})
export class RoomModelPage {

  @ViewChild('scenegraph')
  sceneGraph: SceneGraph;

  constructor() {}

  ionViewDidEnter() {
    this.sceneGraph.startAnimation();
  }

  ionViewDidLeave() {
    this.sceneGraph.stopAnimation();
  }



}
