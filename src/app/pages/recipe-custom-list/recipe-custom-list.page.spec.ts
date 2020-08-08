import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeCustomListPage } from './recipe-custom-list.page';

describe('RecipeCustomListPage', () => {
  let component: RecipeCustomListPage;
  let fixture: ComponentFixture<RecipeCustomListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCustomListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCustomListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
