import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedByPage } from './saved-by.page';

describe('SavedByPage', () => {
  let component: SavedByPage;
  let fixture: ComponentFixture<SavedByPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedByPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedByPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
