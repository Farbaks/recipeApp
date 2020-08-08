import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeCategoryListPage } from './recipe-category-list.page';

describe('RecipeCategoryListPage', () => {
  let component: RecipeCategoryListPage;
  let fixture: ComponentFixture<RecipeCategoryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCategoryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCategoryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
