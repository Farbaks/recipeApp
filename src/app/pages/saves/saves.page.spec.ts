import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavesPage } from './saves.page';

describe('SavesPage', () => {
  let component: SavesPage;
  let fixture: ComponentFixture<SavesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
