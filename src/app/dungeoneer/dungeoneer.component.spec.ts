import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeoneerComponent } from './dungeoneer.component';

describe('DungeoneerComponent', () => {
  let component: DungeoneerComponent;
  let fixture: ComponentFixture<DungeoneerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeoneerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeoneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
