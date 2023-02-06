import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    //array de toutes les modales actives 
    private modals: any[] = [];

    //les méthodes add et remove sont appelées par la modale lorsqu'elle est initialisée et détruite
    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }


    //open et close sont appelées pour ouvrir ou fermer une modale ciblée via son id
    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}