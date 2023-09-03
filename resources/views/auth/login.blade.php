@extends('layouts.app')
@section('content')
<div class="wrapper wrapper-full-page">
    <div class="page-header login-page header-filter">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                    <form class="form" method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="card card-login" style="opacity: 0.9;">
                            @if(session('status'))
                            <div class="card-body" style="padding: .9375rem 20px;">
                                <p class="alert alert-info">
                                    {{ session('status') }}
                                </p>
                            </div>
                            @endif
                            <div class="card-body mt-4">
                                <img class="img-fluid" style="margin-left:42px;height:250px;width:250px;" src="{{ asset('md/img/lspu-logo.png') }}">
                                <div class="d-flex justify-content-center ml-4">
                                    <h3><b>IPCRMS ACCOUNT</b>
                                        <h3>
                                </div>
                                <div class="bmd-form-group">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="material-icons">email</i>
                                            </span>
                                        </div>
                                        <input name="email" type="email" class="form-control" placeholder="{{ __('global.login_email') }}..." value="{{ old('email') }}" required autocomplete="email" autofocus>
                                    </div>
                                    @error('email')
                                    <div class="error" for="email">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                                <div class="bmd-form-group">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="material-icons">lock_outline</i>
                                            </span>
                                        </div>
                                        <input name="password" type="password" class="form-control" placeholder="{{ __('global.login_password') }}..." autocomplete="current-password" required>
                                    </div>
                                    @error('password')
                                    <div class="error" for="email">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="card-footer justify-content-center flex-column mb-4">
                                <button type="submit" class="btn btn-round btn-success">
                                    {{ __('global.login') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
