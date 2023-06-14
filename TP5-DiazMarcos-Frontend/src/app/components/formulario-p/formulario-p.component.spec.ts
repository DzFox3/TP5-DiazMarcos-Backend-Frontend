import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPComponent } from './formulario-p.component';

describe('FormularioPComponent', () => {
  let component: FormularioPComponent;
  let fixture: ComponentFixture<FormularioPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
