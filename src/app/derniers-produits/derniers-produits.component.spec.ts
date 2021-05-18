import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerniersProduitsComponent } from './derniers-produits.component';

describe('DerniersProduitsComponent', () => {
  let component: DerniersProduitsComponent;
  let fixture: ComponentFixture<DerniersProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerniersProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerniersProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
