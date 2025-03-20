import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDragaoComponent } from './detalhes-dragao.component';

describe('DetalhesDragaoComponent', () => {
  let component: DetalhesDragaoComponent;
  let fixture: ComponentFixture<DetalhesDragaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDragaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesDragaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
