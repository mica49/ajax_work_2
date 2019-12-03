import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPannelComponent } from './album-pannel.component';

describe('AlbumPannelComponent', () => {
  let component: AlbumPannelComponent;
  let fixture: ComponentFixture<AlbumPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
