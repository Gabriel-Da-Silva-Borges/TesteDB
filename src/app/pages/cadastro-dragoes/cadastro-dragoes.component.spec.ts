import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDragoesComponent } from './cadastro-dragoes.component';

describe('CadastroDragoesComponent', () => {
  let component: CadastroDragoesComponent;
  let fixture: ComponentFixture<CadastroDragoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDragoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDragoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
