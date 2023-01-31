import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../interface/usuario.interface';
import { VacasService } from '../../vacas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario!:Usuario;

  constructor(private router:Router,
              private vacasService:VacasService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('id');
    this.vacasService.getUsuarioById(id!)
    .subscribe(usuario=>{
      this.usuario=usuario;
    });
  }

  logout(){
    localStorage.removeItem('id');
    this.router.navigate(['./auth/login']);
  }

}
