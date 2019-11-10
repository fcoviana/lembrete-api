import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from '../../service/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private router: Router) { }

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete)
    .subscribe(() => { this.router.navigateByUrl('/'); },
    () => { this.errorMsgComponent.setError('Falha ao cadastrar lembrete.'); });
  }

}
