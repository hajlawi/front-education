import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { FileData } from 'src/app/models/file-data.model';
import { UploadFileServiceService } from 'src/app/service/upload-file-service.service';
import { DocumentService } from '../../service/document/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  filegeted:any;
  fileList?: FileData[];
  idMatiere:any;
  displayBasic: boolean = false;
  submittedUpdate = false;
    constructor(private downloadService: UploadFileServiceService,private router: Router,private route: ActivatedRoute,
      private DocumentService:DocumentService) {
    }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(
        params => {
          this.idMatiere = params.get('id');

        }
      );
      this.getFileListByMatiere(this.idMatiere);
     // this.getDocuments(this.idMatiere);
    }
  
  
    getFiles(){
    this.downloadService.getFile().subscribe(
    (response) => {
      this.filegeted=response;
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  
  )
    }
  
    downloadFile(): void {
   //this.filegeted=filename;
      this.downloadService
        .download( this.filegeted)
        .subscribe(blob =>FileSaver.saveAs(blob,this.filegeted));
    }
    
/*     getFileList(): void {
      this.downloadService.list().subscribe(result => {
        this.fileList = result;
      });
    } */
    getFileListByMatiere(id:number): void {
      this.downloadService.listFileByMatiere(id).subscribe(result => {
        this.fileList = result;
        console.log("list"+JSON.stringify(this.fileList));
      });
    }
    downloadFiles(fileData: FileData): void {
      this.downloadService
        .download(fileData.name)
        .subscribe(blob => {
          var blobs = new Blob([blob], {type: 'application/pdf'});
          FileSaver.saveAs(blobs, fileData.name)
        }
          );
        }

        getDocuments(id:any){
          this.DocumentService.getDocument(id).subscribe(data=>
            console.log(data)
            );

        }

        addDocument(){
          this.router.navigate(['ajout-document'+'/'+this.idMatiere]);
        }
        showBasicDialog() {
          this.displayBasic = true;
        }
        
        getNewData(event:any){
          this.displayBasic=event;
          this.ngOnInit(); 
        }
        onCloseDialog(){
          this.displayBasic=false;
        }

}
