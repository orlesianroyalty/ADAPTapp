import { ViewChild, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SceneGraph } from '../../components/scenegraph/scenegraph'

@Component({
  selector: 'page-safety-recommends',
  templateUrl: 'safety-recommends.html'
})
export class SafetyRecommends {

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
