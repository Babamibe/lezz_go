import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

//contrôle l'ouverture et la fermeture de la modale

@Component({ 
    selector: 'jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None //permet au style d'être global et non spécifique
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string ="modal";
    private element: any; //pour accéder aux éléments du DOM pour la modale (show, hide, move)

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        // s'assure que l'attribut 'id' de la modale existe
        if (!this.id) {
            console.error('la modale doit avoir un id');
            return;
        }

        //place la modale en bas de la page (juste avant </body>), pour qu'elle puisse être affichée au dessus de tout le reste
        document.body.appendChild(this.element);

        //ferme la modal lorsque l'on clique sur le background
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });

        //ajoute la modale au modal.service pour qu'elle puisse être accessible à partir du controller
        this.modalService.add(this);
    }

    //supprime la modale du modal.service lorsque le composant est détruit
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    //ouvre la modale
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    //ferme la modale
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}