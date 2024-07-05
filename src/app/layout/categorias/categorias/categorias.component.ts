import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriasInterface } from '../../../modelos/categorias.interface';
import { ApiService } from '../../servicios/servicios/api.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,RouterOutlet,CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  categoriasList: CategoriasInterface[] = [];
  filteredCategories: CategoriasInterface[] = [];
  searchQuery: string = '';
  currentPage: number = 1;

  constructor(private categoriasService: ApiService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriasService.getCategorias().subscribe({
      next: (result) => {
        this.categoriasList = result;
        this.filteredCategories = result;  // Inicializa filteredCategories
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterCategories(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredCategories= this.categoriasList.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    );
    this.currentPage = 1;
  }

  trackById(index: number, item: CategoriasInterface): number {
    return item.id_categorie;
  }

}
