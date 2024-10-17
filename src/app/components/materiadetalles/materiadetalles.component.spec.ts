import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriadetallesComponent } from './materiadetalles.component';

describe('MateriadetallesComponent', () => {
  let component: MateriadetallesComponent;
  let fixture: ComponentFixture<MateriadetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriadetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriadetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
