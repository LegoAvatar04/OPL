import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { StarthereComponent } from './starthere/starthere.component';
import { ArticleComponent } from './article/article.component';
import { LessonlistComponent } from './lessonlist/lessonlist.component';
import { LessonsearchComponent } from './lessonsearch/lessonsearch.component';
// import { CategorylistComponent } from './categorylist/categorylist.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivacyComponent } from './privacy/privacy.component';
// import { ContributorsComponent } from './contributors/contributors.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	// { path: '', pathMatch:'full', component: RouterModule },
	{ path: '', redirectTo:"/starthere", pathMatch:'full' },
	// { path: 'home', component: HomeComponent },
	// { path: 'dashboard', component: DashboardComponent },
	{ path: 'search', component: LessonsearchComponent },
	{ path: 'lessonlist', component: LessonlistComponent },
	{ path: 'starthere', component: StarthereComponent },
	{ path: 'article/:id', component: ArticleComponent },
	// { path: 'categorylist', component: CategorylistComponent},
	{ path: 'privacy', component: PrivacyComponent},
	// { path: 'contributors', component: ContributorsComponent},
	{ path: 'profile/:user_handle', component: ProfileComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
	scrollPositionRestoration: 'enabled',
	anchorScrolling: 'enabled',
	// scrollOffset: [0, 64], 
	useHash: true, 
	relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
