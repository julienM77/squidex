/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SqxFrameworkModule } from '@app/framework';
import { MentionModule } from 'angular-mentions';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { AppFormComponent, AppLanguagesService, AppMustExistGuard, AppsService, AppsState, AssetComponent, AssetDialogComponent, AssetFolderComponent, AssetFolderDialogComponent, AssetFolderDropdownComponent, AssetHistoryComponent, AssetPathComponent, AssetPreviewUrlPipe, AssetsListComponent, AssetsSelectorComponent, AssetsService, AssetsState, AssetTextEditorComponent, AssetUploaderComponent, AssetUploaderState, AssetUrlPipe, AuthInterceptor, AuthService, AutoSaveService, BackupsService, BackupsState, ClientsService, ClientsState, CommentComponent, CommentsComponent, CommentsService, ContentListCellDirective, ContentListFieldComponent, ContentListHeaderComponent, ContentListWidthPipe, ContentMustExistGuard, ContentsColumnsPipe, ContentSelectorComponent, ContentSelectorItemComponent, ContentsService, ContentsState, ContentStatusComponent, ContentValueComponent, ContentValueEditorComponent, ContributorsService, ContributorsState, FileIconPipe, FilterComparisonComponent, FilterLogicalComponent, FilterNodeComponent, GeolocationEditorComponent, GraphQlService, HelpComponent, HelpMarkdownPipe, HelpService, HistoryComponent, HistoryListComponent, HistoryMessagePipe, HistoryService, ImageCropperComponent, ImageFocusPointComponent, LanguagesService, LanguagesState, LoadAppsGuard, LoadLanguagesGuard, LoadSchemasGuard, MarkdownEditorComponent, MustBeAuthenticatedGuard, MustBeNotAuthenticatedGuard, NewsService, NotifoComponent, PlansService, PlansState, PreviewableType, QueryComponent, QueryListComponent, QueryPathComponent, ReferenceDropdownComponent, ReferenceInputComponent, ReferencesCheckboxesComponent, ReferencesTagsComponent, RichEditorComponent, RolesService, RolesState, RuleEventsState, RuleMustExistGuard, RuleSimulatorState, RulesService, RulesState, SavedQueriesComponent, SchemaCategoryComponent, SchemaMustExistGuard, SchemaMustExistPublishedGuard, SchemaMustNotBeSingletonGuard, SchemasService, SchemasState, SchemaTagSource, SearchFormComponent, SearchService, SortingComponent, StockPhotoService, TableHeaderComponent, TranslationsService, UIService, UIState, UnsetAppGuard, UsagesService, UserDtoPicture, UserIdPicturePipe, UserNamePipe, UserNameRefPipe, UserPicturePipe, UserPictureRefPipe, UsersProviderService, UsersService, WorkflowsService, WorkflowsState } from './declarations';

@NgModule({
    imports: [
        DragDropModule,
        MentionModule,
        NgxDocViewerModule,
        RouterModule,
        SqxFrameworkModule,
    ],
    declarations: [
        AppFormComponent,
        AssetComponent,
        AssetDialogComponent,
        AssetFolderComponent,
        AssetFolderDialogComponent,
        AssetFolderDropdownComponent,
        AssetHistoryComponent,
        AssetPathComponent,
        AssetPreviewUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        AssetTextEditorComponent,
        AssetUploaderComponent,
        AssetUrlPipe,
        CommentComponent,
        CommentsComponent,
        ContentListCellDirective,
        ContentListFieldComponent,
        ContentListHeaderComponent,
        ContentListWidthPipe,
        ContentsColumnsPipe,
        ContentSelectorComponent,
        ContentSelectorItemComponent,
        ContentStatusComponent,
        ContentValueComponent,
        ContentValueEditorComponent,
        FileIconPipe,
        FilterComparisonComponent,
        FilterLogicalComponent,
        FilterNodeComponent,
        GeolocationEditorComponent,
        HelpComponent,
        HelpMarkdownPipe,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        ImageCropperComponent,
        ImageFocusPointComponent,
        MarkdownEditorComponent,
        NotifoComponent,
        PreviewableType,
        QueryComponent,
        QueryListComponent,
        QueryPathComponent,
        ReferenceDropdownComponent,
        ReferenceInputComponent,
        ReferencesCheckboxesComponent,
        ReferencesTagsComponent,
        RichEditorComponent,
        SavedQueriesComponent,
        SchemaCategoryComponent,
        SearchFormComponent,
        SortingComponent,
        TableHeaderComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe,
    ],
    exports: [
        AppFormComponent,
        AssetComponent,
        AssetDialogComponent,
        AssetFolderComponent,
        AssetFolderDialogComponent,
        AssetFolderDropdownComponent,
        AssetPathComponent,
        AssetPreviewUrlPipe,
        AssetsListComponent,
        AssetsSelectorComponent,
        AssetUploaderComponent,
        AssetUrlPipe,
        CommentComponent,
        CommentsComponent,
        ContentListCellDirective,
        ContentListFieldComponent,
        ContentListHeaderComponent,
        ContentListWidthPipe,
        ContentsColumnsPipe,
        ContentSelectorComponent,
        ContentSelectorItemComponent,
        ContentStatusComponent,
        ContentValueComponent,
        ContentValueEditorComponent,
        DragDropModule,
        FileIconPipe,
        GeolocationEditorComponent,
        HelpComponent,
        HelpMarkdownPipe,
        HistoryComponent,
        HistoryListComponent,
        HistoryMessagePipe,
        MarkdownEditorComponent,
        NotifoComponent,
        PreviewableType,
        QueryListComponent,
        ReferenceDropdownComponent,
        ReferenceInputComponent,
        ReferencesCheckboxesComponent,
        ReferencesTagsComponent,
        RichEditorComponent,
        RouterModule,
        SavedQueriesComponent,
        SchemaCategoryComponent,
        SearchFormComponent,
        TableHeaderComponent,
        UserDtoPicture,
        UserIdPicturePipe,
        UserNamePipe,
        UserNameRefPipe,
        UserPicturePipe,
        UserPictureRefPipe,
    ],
})
export class SqxSharedModule {
    public static forRoot(): ModuleWithProviders<SqxSharedModule> {
        return {
            ngModule: SqxSharedModule,
            providers: [
                AppLanguagesService,
                AppMustExistGuard,
                AppsService,
                AppsState,
                AssetsService,
                AssetsState,
                AssetUploaderState,
                AuthService,
                AutoSaveService,
                BackupsService,
                BackupsState,
                ClientsService,
                ClientsState,
                CommentsService,
                ContentMustExistGuard,
                ContentsService,
                ContentsState,
                ContributorsService,
                ContributorsState,
                GraphQlService,
                HelpService,
                HistoryService,
                LanguagesService,
                LanguagesState,
                LoadAppsGuard,
                LoadLanguagesGuard,
                LoadSchemasGuard,
                MustBeAuthenticatedGuard,
                MustBeNotAuthenticatedGuard,
                NewsService,
                PlansService,
                PlansState,
                RolesService,
                RolesState,
                RuleEventsState,
                RuleMustExistGuard,
                RuleSimulatorState,
                RulesService,
                RulesState,
                SchemaMustExistGuard,
                SchemaMustExistPublishedGuard,
                SchemaMustNotBeSingletonGuard,
                SchemasService,
                SchemasState,
                SchemaTagSource,
                SearchService,
                StockPhotoService,
                TranslationsService,
                UIService,
                UIState,
                UnsetAppGuard,
                UsagesService,
                UsersProviderService,
                UsersService,
                WorkflowsService,
                WorkflowsState,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
