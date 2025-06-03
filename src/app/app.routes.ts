import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FeelGoodComponent } from './feel-good/feel-good.component';
import { DetailsPagesComponent } from './details-pages/details-pages.component';
import { ActionFixComponent } from './action-fix/action-fix.component';
import { MindBenderComponent } from './mind-bender/mind-bender.component';

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'index', component: IndexComponent},
    { path: 'feel_good', component: FeelGoodComponent},
    { path: 'action_fix', component: ActionFixComponent},
    { path: 'mind_bender', component: MindBenderComponent},
    { path: 'movie/:id', component: DetailsPagesComponent}
];
    