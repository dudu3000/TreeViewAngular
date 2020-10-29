import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { FetchJSONService } from '../fetchJSON.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-newTree',
  templateUrl: './newTree.component.html',
  styleUrls: ['./newTree.component.css']
})
export class NewTreeComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data;
  public fetch: FetchJSONService;
  @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent;

  //Getting JSON using Service
  constructor(public fetchedData: FetchJSONService) { 
    this.data = fetchedData.fetchJSON().then(data=>this.data = data);
    this.editorOptions = new JsonEditorOptions()
    this.setTreeOptions();
  }

  //Used to update on button click
  updateTree(){
    this.data = this.fetchedData.fetchJSON().then(data=>this.data = data);
    this.editorOptions = new JsonEditorOptions()
    this.setTreeOptions();
  }

  
  //Set options for the tree
  setTreeOptions(){
    this.editorOptions.mode='tree';
    this.editorOptions.expandAll = true;
    this.editorOptions.navigationBar = false;
    this.editorOptions.search = false;
    this.editorOptions.mainMenuBar = false;
    this.editorOptions.name = "File.json"
  }

  

  ngOnInit() {
  }

}
