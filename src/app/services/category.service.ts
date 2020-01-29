import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../domains/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryRegistry = environment.properties.categoryRegistry;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryRegistry);
  }
}
