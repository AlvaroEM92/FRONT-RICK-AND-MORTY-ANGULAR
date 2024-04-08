import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoUrl!: SafeResourceUrl;
  constructor(private loadingService: LoadingService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadingService.showLoading();
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Jvb3gcVTfDg');
  }
}