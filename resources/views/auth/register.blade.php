@extends('layouts.app')
@section('content')

@php

$academic_rank = \App\Models\AcademicRank::get();
$departments = \App\Models\Department::get();
$roles = \App\Models\Role::where('title', '!=' , 'Admin')->get();

$year = Carbon\Carbon::now()->format('Y');
$day = Carbon\Carbon::now()->format('d');
$month = Carbon\Carbon::now()->format('m');
$user_count = \App\Models\User::count() + 1;
$auto_generate_id = "$year-$day$month$user_count";

@endphp
<div class="wrapper wrapper-full-page">
    <div class="page-header register-page header-filter">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-6 col-sm-8 ml-auto mr-auto">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="card ">
                            <div class="card-header card-header-primary text-center">
                                <h4 class="card-title">{{ __('global.register') }}</h4>
                            </div>
                            @if(session('status'))
                            <div class="card-body" style="padding: .9375rem 20px;">
                                <p class="alert alert-info">
                                    {{ session('status') }}
                                </p>
                            </div>
                            @endif
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        {{-- Name --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">face</i>
                                                    </span>
                                                </div>
                                                <input name="name" type="text" class="form-control" placeholder="{{ __('global.user_name') }}..." value="{{ old('name') }}" required autocomplete="name" autofocus>
                                            </div>
                                            @error('name')
                                            <div class="error" for="name">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>
                                        {{-- Academic Year --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">group</i>
                                                    </span>
                                                </div>
                                                <select class="form-control" aria-label="Default select example" name="academic_rank">
                                                    @foreach($academic_rank as $rank)
                                                    <option value="{{$rank->id}}">{{$rank['name']}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            @error('academic_rank')
                                            <div class="error" for="academic_rank">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>
                                        {{-- Email --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">mail</i>
                                                    </span>
                                                </div>
                                                <input name="email" type="email" class="form-control" placeholder="{{ __('global.login_email') }}..." value="{{ old('email') }}" required autocomplete="email">
                                            </div>
                                            @error('email')
                                            <div class="error" for="email">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>
                                        {{-- Contact --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">contacts</i>
                                                    </span>
                                                </div>
                                                <input name="contact_no" type="text" class="form-control" placeholder="Contact number..." required autocomplete="contact_no">
                                            </div>
                                            @error('contact_no')
                                            <div class="error" for="contact_no">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>
                                        {{-- Department --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">diversity_3</i>
                                                    </span>
                                                </div>
                                                <select class="form-control" aria-label="Default select example" name="department_id">
                                                    @foreach($departments as $department)
                                                    <option value="{{$department->id}}">{{ $department['name'] }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            @error('department')
                                            <div class="error" for="department">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>

                                        {{-- Roles --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">settings_accessibility</i>
                                                    </span>
                                                </div>
                                                <select class="form-control" aria-label="Default select example" name="role_id">
                                                    @foreach($roles as $role)
                                                    <option value="{{$role->id}}">{{ $role['title'] }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            @error('role')
                                            <div class="error" for="role">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <img class="img-fluid" style="margin-left: 164px;height: 187px; width: 191px;" src="{{ asset('md/img/lspu-logo.png') }}">
                                        {{--Auto Generate --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">manage_accounts</i>
                                                    </span>
                                                </div>
                                                <input name="ipcr_id" type="text" class="form-control" placeholder="Auto Generate ID" value="{{$auto_generate_id}}" readonly>
                                            </div>
                                            @error('ipcr_id')
                                            <div class="error" for="ipcr_id">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>
                                        {{-- Password --}}
                                        <div class=" form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">lock_outline</i>
                                                    </span>
                                                </div>
                                                <input name="password" type="password" class="form-control" placeholder="{{ __('global.login_password') }}..." value="{{ old('password') }}" required autocomplete="new-password">
                                            </div>
                                            @error('password')
                                            <div class="error" for="password">
                                                {{ $message }}
                                            </div>
                                            @enderror
                                        </div>
                                        {{-- Password Confirm --}}
                                        <div class="form-group bmd-form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">lock_outline</i>
                                                    </span>
                                                </div>
                                                <input name="password_confirmation" type="password" class="form-control" placeholder="{{ __('global.login_password_confirmation') }}..." value="{{ old('password') }}" required autocomplete="new-password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer justify-content-center flex-column">
                                <button class="btn btn-primary btn-round mt-4 mb-3">Register</button>
                                or
                                <a class="btn btn-link btn-primary" href="{{ route('login') }}">
                                    {{ __('global.login') }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
