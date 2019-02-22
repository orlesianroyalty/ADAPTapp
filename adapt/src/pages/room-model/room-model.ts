import { ViewChild, Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SceneGraph } from '../../components/scenegraph/scenegraph'

@Component({
  selector: 'page-room-model',
  templateUrl: 'room-model.html'
})
export class RoomModelPage {

  @ViewChild('scenegraph')
  sceneGraph: SceneGraph;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.sceneGraph.startAnimation();
  }

  ionViewDidLeave() {
    this.sceneGraph.stopAnimation();
  }



}
