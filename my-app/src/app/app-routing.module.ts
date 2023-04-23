import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai/ai.component';
import { PlayingComponent } from './playing/playing.component';
import { ChatComponent } from './chat/chat.component';
import { GameComponent } from './game/game.component';
import { BigAnswerComponent } from './big-answer/big-answer.component';

const routes: Routes = [
  { path: 'homepage', component: AiComponent },
  { path: 'playing', component: PlayingComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'game', component: GameComponent },
  { path: 'big-answer', component: BigAnswerComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
