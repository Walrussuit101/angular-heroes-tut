# [Pipes:](https://angular.io/guide/pipes)

Use pipes to transform strings, currency amounts, dates and other data for display. 

```html
<h2>{{hero.name | uppercase}}</h2>
```

this will make the field `name` of the `hero` variable uppercase in browser

<br/>

# [Class binding:](https://angular.io/guide/attribute-binding#class-binding)
    

```html
<li [class.____]='some conditional'></li>
```

<br/>

# [Directives:](https://angular.io/guide/built-in-directives#built-in-directives)

`*ngFor='let ____ of __varArray__'` ex:
```html
<li *ngFor='let hero of heroes'>
    <span class='badge'>{{hero.id}}</span> {{hero.name}}
</li>
```

`*ngIf='___'` ex:
```html
<div *ngIf='selectedHero'>
    ...
</div>
```
this only displays the div if the component's `selectedHero` variable is defined

<br/>

# Etc.
- app.module.ts holds some metadata information regarding other libraries Angular may need, like the `FormsModule` to use the @NgModule decorator