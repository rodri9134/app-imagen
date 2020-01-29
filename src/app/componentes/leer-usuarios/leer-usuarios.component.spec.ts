import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerUsuariosComponent } from './leer-usuarios.component';

describe('LeerUsuariosComponent', () => {
  let component: LeerUsuariosComponent;
  let fixture: ComponentFixture<LeerUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
