import { Component, OnInit, NgModule } from '@angular/core';
import { FetchJSONService } from '../fetchJSON.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  private layer = 0;
  public dataArray = [];
  public layerArray = [];
  private lengthOfElement = [];
  private index = 0;
  public data = {};
  public fetch: FetchJSONService;

  //Getting JSON using Service
  constructor(public fetchedData: FetchJSONService) { 
    this.data = fetchedData.fetchJSON().then(data=>this.data = data);
  }


  //Method called by clicking "update button"
  updateList(){
    this.fetchedData.fetchJSON().then(data=>this.data = data)
    this.setPropertiesToInit();
    this.getDataArray(this.data);
    this.getLayer();
    this.removeLayerNumber();
  }



  //Set all properties to default
  setPropertiesToInit(){
    this.dataArray = [];
    this.layerArray = [];
    this.layer = 0;
    this.index = 0;
  }



  //Convert JSON format to Array.(if fetched data is undefined or anything else than JSON it returns an error)
  getDataArray(data){
    if(data == undefined || typeof(data) !== 'object'){
      this.handleError(0);
      return;
    }
    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        const element = data[item];

        if(typeof(element) == 'object'){
          this.dataArray[this.index] = item + ': ' + '_' + this.layer;
          this.layer++;
          this.index++;
          this.getDataArray(element);
        }else{
          this.dataArray[this.index] = item + ': ' + element + '_' + this.layer;
          this.layer++;
          this.index++;
        }
        this.layer--;
      }
    }
  }


  //Get the layer of each element to know how much left margin to add for each element
  getLayer(){
    for(var getLayerIncrement = 0; getLayerIncrement < this.dataArray.length; getLayerIncrement++){
      this.layerArray[getLayerIncrement] = '';
      var numberOfLayer = this.dataArray[getLayerIncrement].split('_')[1];
      for(var setSpacesLyaerIncrement = 0; setSpacesLyaerIncrement < numberOfLayer; setSpacesLyaerIncrement++){
        this.layerArray[getLayerIncrement] += '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
      }
    }
  }

  //Remove the information about layers from each element
  removeLayerNumber(){
    for(var rmLayerNrIncrement = 0; rmLayerNrIncrement < this.dataArray.length; rmLayerNrIncrement++){
      this.dataArray[rmLayerNrIncrement] = this.dataArray[rmLayerNrIncrement].split('_')[0];
    }
  }




  private handleError(errorId){
    if(errorId == 0){
      console.error('Something is wrong with data in file');
    }
    return throwError(new Error('Something is wrong with files\' data'));
  }
  

  ngOnInit() {
  }

}
