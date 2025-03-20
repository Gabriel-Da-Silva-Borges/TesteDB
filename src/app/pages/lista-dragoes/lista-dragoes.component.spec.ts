import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDragoesComponent } from './lista-dragoes.component';

describe('ListaDragoesComponent', () => {
  let component: ListaDragoesComponent;
  let fixture: ComponentFixture<ListaDragoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDragoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDragoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
