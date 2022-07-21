import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaypic',
  templateUrl: './displaypic.component.html',
  styleUrls: ['./displaypic.component.css'],
})
export class DisplaypicComponent implements OnInit {
  photoUrl: string = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getImgs();
  }

  getImgs() {
    this.photoService.getPhotos().subscribe((response) => {
      this.photoUrl = response.urls.regular;
      console.log('Photo Url : ',this.photoUrl);
    });
  }

  onClickNew(){
    this.getImgs();
  }
}
