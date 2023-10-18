import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarproduitComponent } from './navbarproduit.component';

describe('NavbarproduitComponent', () => {
  let component: NavbarproduitComponent;
  let fixture: ComponentFixture<NavbarproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarproduitComponent]
    });
    fixture = TestBed.createComponent(NavbarproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
