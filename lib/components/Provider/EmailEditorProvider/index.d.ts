import { IEmailTemplate } from '../../../typings';
import React from 'react';
import { ActiveTabKeys } from '..//BlocksProvider';
import { PropsProviderProps } from '../PropsProvider';
import { Config, FormApi, FormState } from 'final-form';
export interface EmailEditorProviderProps<T extends IEmailTemplate = any> extends PropsProviderProps {
    data: T;
    children: (props: FormState<T>, helper: FormApi<IEmailTemplate, Partial<IEmailTemplate>>) => React.ReactNode;
    onSubmit?: Config<IEmailTemplate, Partial<IEmailTemplate>>['onSubmit'];
    validationSchema?: Config<IEmailTemplate, Partial<IEmailTemplate>>['validate'];
    defaultActiveTab?: ActiveTabKeys;
    isPreview?: boolean;
    jsonReadOnly?: boolean;
    mjmlReadOnly?: boolean;
}
export declare const EmailEditorProvider: <T extends unknown>(props: EmailEditorProviderProps<any> & T) => JSX.Element | null;
