import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookmark',
  imports: [CommonModule, RouterModule, RouterLink, FormsModule],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css'
})
export class BookmarkComponent implements OnInit {
  bookmarks: any[] = [];
  ticket!: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBookmarks().subscribe(
      data => {
        this.bookmarks = data as any[];
      }
    )
  }
}
