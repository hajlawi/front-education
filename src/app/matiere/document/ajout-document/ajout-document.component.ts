import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileServiceService } from 'src/app/service/upload-file-service.service';

@Component({
  selector: 'app-ajout-document',
  templateUrl: './ajout-document.component.html',
  styleUrls: ['./ajout-document.component.css']
})
export class AjoutDocumentComponent implements OnInit {
  @Input() displayBasic: boolean;
  @Output() onChangeValues = new EventEmitter<any>();
  @Input() submittedUpdate: boolean;
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';
document:FormGroup;
idDoc:number;
payLoad:any;
idMatiere:any;
  constructor(private uploadService: UploadFileServiceService,private formBuilder: FormBuilder,
    private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.idMatiere = params.get('id');
      }
    );
    this.document = this.formBuilder.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['',[Validators.required]],
      section: ['', [Validators.required]],
      //data: ['', [Validators.required]]
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile,this.idMatiere).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              console.log(Math.round(100 * event.loaded / event.total));

            } else if (event instanceof HttpResponse) {
              this.message = event.body.responseMessage;
            }
          },
          (err: any) => {
            console.log(err);

            if (err.error && err.error.responseMessage) {
              this.errorMsg = err.error.responseMessage;
            } else {
              this.errorMsg = 'Error occurred while uploading a file!';
            }

            this.currentFile = undefined;
          });
      }

      this.selectedFiles = undefined;
    }
  }


  onSubmit() {
    
  /*   if (this.document.invalid) {
      console.log("error ");
      return;
    
    }

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
    //  const datadoc = JSON.stringify(this.document.value);
      let 
      data={
        titre:JSON.stringify(this.document.value.titre),
        type:this.document.value.type,
       section:this.document.value.section,
       desciption:this.document.value.description,
      }
      if (file) {
       // this.currentFile = file;
    
        this.uploadService.addDoc(data,this.idmatiere).pipe().subscribe(
          response => {
this.idDoc=response.id;

console.log("datttt"+JSON.stringify(response));

console.log(this.idDoc);
 */

if (this.selectedFiles) {
  const file: File | null = this.selectedFiles.item(0);
  if (file) {

this.uploadService.uploadfile(file,this.idMatiere).subscribe(arg=>{
  console.log("reponsefile"+arg);
})
       
            alert("avec succes!")
           
          }
     
      }}


   onCloseDialog(){
    this.onChangeValues.emit(false);
  }
}
